// 먼저 유저로부터 비디오를 가져와서 화면에 보여줘여 한다.
// 두번째는 버튼을 만들어 마이크 카메라를 껐다켰다하는 버튼을 만들어야한다.
// 전면과 후면 카메라를 전환하는 기능을 만들어야 한다.

const socket = io();

const myFace = document.getElementById("myFace");
const muteBtn = document.getElementById("mute");
const cameraBtn = document.getElementById("camera");
const cameraSelect = document.getElementById("cameras");
const call = document.getElementById("call");
const collabo = document.getElementById("collabo");

call.hidden = true; // 초기 통화 부분은 안보임
collabo.hidden = true;

let myStream; // stream을 받아야한다. => 비디오와 오디오가 결합된것

// 음소거 여부 및 카메라 켜짐여부를 추적할 변수들이 필요함
let muted = false;
let cameraOff = false;
let roomName;
let myPeerConnection;

async function getCamers() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter((device) => device.kind === "videoinput");
    const currentCamera = myStream.getVideoTracks()[0];
    cameras.forEach((camera) => {
      const option = document.createElement("option");
      option.value = camera.deviceId; // 디바이스 아이디
      option.innerText = camera.label; // 디바이스 이름
      if (currentCamera.label === camera.label) {
        option.selected = true;
      }
      cameraSelect.append(option);
    });
  } catch (e) {
    console.log(e);
  }
}

async function getMedia(deviceId) {
  // 결과적으론 카메라를 실행하는 함수
  const initialConstraints = {
    audio: true,
    video: { facingMode: "user" },
  };
  const cameraConstraints = {
    audio: true,
    video: { deviceId: { exact: deviceId } },
  };
  try {
    myStream = await navigator.mediaDevices.getUserMedia(
      deviceId ? cameraConstraints : initialConstraints
    );
    myFace.srcObject = myStream;
    if (!deviceId) {
      // 초기 디바이스 id가 없을 때만 실행
      await getCamers();
    }
  } catch (error) {
    console.log(error);
  }
}

function handleMuteClick() {
  //console.log(myStream.getAudioTracks()); // track을 출력
  myStream
    .getAudioTracks()
    .forEach((track) => (track.enabled = !track.enabled));
  // 트랙 값을 기존의 반대값으로 바꿈으로써 음소거 기능 구현
  if (!muted) {
    muteBtn.innerText = "Unmute";
    muted = true;
  } else {
    muteBtn.innerText = "Mute";
    muted = false;
  }
}
function handleCameraClick() {
  //console.log(myStream.getVideoTracks()); // track을 출력
  myStream
    .getVideoTracks()
    .forEach((track) => (track.enabled = !track.enabled));
  // 트랙 값을 기존의 반대값으로 바꿈으로써 화면중지 기능 구현
  if (cameraOff) {
    cameraBtn.innerText = "Turn Camera Off";
    cameraOff = false;
  } else {
    cameraBtn.innerText = "Turn Camera On";
    cameraOff = true;
  }
}

async function handleCameraChange() {
  await getMedia(cameraSelect.value);
  //카메라를 변경했을때 스트림이 변경되지 않는 문제를 해결해야함
  // 카메라를 바꿀때마다 새로운 stream을 만들고 카메라를 바꿀때마다 서로 다른 id로 새로운 스트림을 만듬
  // 우리가 해야하는 것은 peer에게 줄 stream을 업데이트 해줘야한다.
  // peer-to-peer 연결을 만들때 track을 추가하기 때문이다.

  if (myPeerConnection) {
    // videotrakc을 받으면 내가 선택한 새장치로 deviceid를 설정해야한다.
    const videoTrack = myStream.getVideoTracks()[0];

    // console.log(myPeerConnection.getSenders());
    // Sender는 우리의 peer로 보내진 media stream track을 컨트롤하게 해준다.
    // track이 존재하고 우리의 stream을 mute할 수도 있고, p2p connection에서 track도 변경할 수 있다.
    // 이떄 사용하는 것이 replaceTrack()이다.
    const videoSender = myPeerConnection
      .getSenders()
      .find((sender) => sender.track.kind === "video");
    videoSender.replaceTrack(videoTrack);
  }
}

muteBtn.addEventListener("click", handleMuteClick);
cameraBtn.addEventListener("click", handleCameraClick);
cameraSelect.addEventListener("input", handleCameraChange);

// Welcome Form (join a room)
const welcome = document.getElementById("welcome");
const welcomeForm = welcome.querySelector("form");

async function initCall() {
  // 양쪽 브라우저에서의 돌아가는 코드 부분
  // 양쪽 브라우저에서 방에 참가하면 양쪽은 이 코드를 수행
  welcome.hidden = true;
  call.hidden = false;
  collabo.hidden = false;
  muteBtn.style.display = "block";
  cameraBtn.style.display = "block";
  cameraSelect.style.display = "block";
  await getMedia();
  makeConnection();
}

async function handleWelcomeSubmit(event) {
  event.preventDefault();
  const input = welcomeForm.querySelector("input");
  await initCall();
  // 동작이 너무 빨라 emit 전에 initcall() 실행
  // web socket의 속도가 media를 가져오거나 연결을 만드는 속도보다 빠르기 때문에
  // 에러가 발생하여서 initcall을 room에 참여하기전에 실행한다.
  socket.emit("join_room", input.value);
  roomName = input.value;
  input.value = "";
}

welcomeForm.addEventListener("submit", handleWelcomeSubmit);

// Socket Code

socket.on("welcome", async () => {
  // 3. offer를 생성
  const offer = await myPeerConnection.createOffer();
  // 4. local description을 구성해야함 => 우리가 생성한 offer 로 연결을 구성
  // 이 경우는 기존 peerA의 입장에서는 offer를 setLocalDescription을 통해 local desc로 설정
  myPeerConnection.setLocalDescription(offer);
  // 5. 이제 서버로 offer를 보내야함
  // 단, 이경우 socket.io 한테 어떤 방이 이 offer를 emit할건지 알려줘야함
  // 그렇게 roomName을 같이 보냄
  //console.log("sent the offer");
  socket.emit("offer", offer, roomName);
});

// 7. 아래 offer이벤트는 offer를 받게되는 peerB임.
socket.on("offer", async (offer) => {
  //console.log("receive the offer");
  // 8. peer B에서 setRemoteDescription() 수행
  // peer B에서는 offer를 받기 때문에
  // setRemoteDescription를 통해 remote desc로 설정
  myPeerConnection.setRemoteDescription(offer);
  const answer = await myPeerConnection.createAnswer();
  //setLocalDescription을 통해 각각의 offer 와 answer를 각각의 local 설정에 적용
  // answer를 생성하여 setLocalDescription을 통해 local desc로 설정
  //console.log("sent the answer");
  myPeerConnection.setLocalDescription(answer);
  socket.emit("answer", answer, roomName);
});

socket.on("answer", (answer) => {
  //console.log("receive the answer");
  // peer B에서 응답한 answer를 peer A에서 remote desc로 등록해야함
  myPeerConnection.setRemoteDescription(answer);
});

socket.on("ice", (ice) => {
  //console.log("receive candidate");
  myPeerConnection.addIceCandidate(ice);
});

// RTC code

function makeConnection() {
  // 1. peerConnection 을 통해 각각의 브라우저 별로 설정해 주는 것. => peer-to-peer 연결을 만든 것.
  myPeerConnection = new RTCPeerConnection({
    iceServers: [
      // 단순히 테스트용도 개발할때는 의존하면 안됨
      // 개인적인 webRTC프로젝트를 하고 싶다면 개별적으로 stun서버를 가져야함
      // STUN서버는 장치에 공용주소를 알려주는 서버이다.
      // 왜냐면 장치의 공용주소를 알아야 다른 네트워크에 있는 장치들이 서로를 찾을 수 있기 때문이다.
      {
        urls: [
          "stun:stun.l.google.com:19302",
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
          "stun:stun3.l.google.com:19302",
          "stun:stun4.l.google.com:19302",
        ],
      },
    ],
  });
  //peerConnection을 생성하자마자 icecandidate 설정
  // icecandidate(인터넷 연결 생성) => webRTC에 필요한 프로토콜을 의미
  // 멀리 떨어진 장치와 소통할 수 있게 하기 위함
  // 즉, 브라우저가 서로 소통할 수 있게 하는 방법
  // 어떤 소통방법이 가장 좋은지 결정하는 것.
  myPeerConnection.addEventListener("icecandidate", handleIce);

  // 마지막 과정은 addStream이벤트를 등록하는 것이다.
  myPeerConnection.addEventListener("addstream", handleAddStream);

  // 2. addStream()을 이용해서 커넥션에 스트림을 추가 => addStream()은 구식 함수이기 떄문에 다른 방식 사용
  // 즉, 2번은 양쪽 브라우저에서 카메라와 마이크의 데이터 stream을 받아서 그것들을 연결안에 집어넣는 코드
  // 따라서 아직 브라우저들을 연결하진 않은 상태 => 각 브라우저를 따로 구성한 상태임.
  myStream
    .getTracks()
    .forEach((track) => myPeerConnection.addTrack(track, myStream));
  // 3. 커넥션을 만들어주는것은 소켓을 이용 => welcome 이벤트로 생성했음
}

// 각 연결 과정은 README에 그림 참고

function handleIce(data) {
  // 생성된 candidate를 다른 브라우저로 전달해야함.
  //console.log("send candidate");
  socket.emit("ice", data.candidate, roomName);
}

function handleAddStream(data) {
  // console.log("got an event from my peer");
  // console.log("Peer's Stream : ", data.stream);
  // console.log("My Stream : ", myStream);

  const peerFace = document.getElementById("peerFace");
  peerFace.srcObject = data.stream;
  // 이제 해결할 것은 카메라를 변경했을때 스트림이 변경되지 않는 문제를 해결해야함
}
