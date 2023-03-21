

<img src="/temp2.PNG" width="100%" height="auto" />

# Team : 백구의 Blo9

## System Architecture

<span align="center">

![SystemArchitecure](./images/SystemArchitecture.PNG)

</span>

<br />

---

## 역할

|  이름  |   역할   |             시스템              |
| :----: | :------: | :-----------------------------: |
| 김성한 | Frontend |  Frontend, WebRTC 서버 구축, 동시편집 서버 구축, 시스템 아키텍처 설계 및 구축, 배포  |
| 배성찬 | Frontend |  Frontend, WebRTC, 컴포넌트 설계, 디자인  |
| 이상학 | Backend  | Backend, 동시편집, 백엔드 설정 |
| 김경민 | Backend  |     Backend, CI/CD, Docker     |
| 김소진 | Backend  |   Backend, WebRTC, 동시편집, Docker     |

<br />

---

## 프로젝트 구현

### `OpenVidu`

- Kurento 미디어 서버를 지원하며 이러한 미디어 서버 연결 및 WebRTC 전반에 걸친 API를 제공하는 오픈소스
- 해당 프로젝트의 경우 다수의 사용자가 접근하여 계획을 세우는 애플리케이션이기 때문에 미디어서버가 필요
- 미디어 서버가 없는 경우 브라우저 스펙에서의 WebRTC 성능으로는 최대 4 명 까지 원할하게 사용할 수 있었기에 미디어 서버가 필요했고 이러한 니즈에 맞추어 Openvidu 를 사용
- `Openvidu`는 `MCU` 형태의 WebRTC 구조를 지원하기에 다수의 사용자(테스트 결과 최대 11명)가 화상채팅에 접속하더라도 원활하게 사용가능

#### 서버 배포시 Openvidu(25버전)

- 다운로드

```shell script
curl https://s3-eu-west-1.amazonaws.com/aws.openvidu.io/install_openvidu_latest.sh | bash
```

- Openvidu 프로젝트 다운 후 서버 배포

```shell script
./openvidu start
```

<br />

---

### `Y.js 동시편집`

- 다수의 사용자가 여행 계획 템플릿을 작성하는 서비스 특성상 동시편집 기능 필요
- 동시편집 데이터 타입인 CRDT(Conflict-Free-Replicated Data Types)를 구현한 구현체인 `Y.js` 오픈소스를 사용

#### Y-websocket 서버 배포

```sh
HOST=localhost PORT=1234 YPERSISTENCE=./dbDir node ./node_modules/y-websocket/bin/server.js
```

- Y-websocket 서버 배포 후 frontend 영역에서의 indexedDB와 서버측에서의 영구적인 데이터 관리를 위해 LevelDB를 사용

<br />

---

### Frontend

- 메인 페이지 
- 유저 관리(로그인, 마이페이지, 회원정보 수정, 회원가입)
- 사용자별 여행계획 리스트 페이지
- 여행계획 작성 세션 페이지 (WebRTC + CRDT)
- 여행계획 템플릿 PDF 변환 

```sh
# npm dependency 추가
npm install

# front file build
npm run build

# 3000포트로 시작
npm run start
```

<br />

---

### Backend

```sh

```

<br />

---
