# Project : Plans(Plan with Friends)

## Team : 백구의 Blo9
---

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

## 진행 사항

### `OpenVidu`

- OpenVidu를 사용한 리액트 컴포넌트 작업(클래스 컴포넌트)
- EC2상에 Openvidu를 적재하고 REST API 호출 통신

```sh
curl https://s3-eu-west-1.amazonaws.com/aws.openvidu.io/install_openvidu_latest.sh | bash
```

<br />

---

### `Y.js 동시편집`

- 로컬에서 React 컴포넌트로 동시편집 및 개별 템플릿을 이용한 테스트 성공

```sh
HOST=localhost PORT=1234 YPERSISTENCE=./dbDir node ./node_modules/y-websocket/bin/server.js
```

<br />

---

### Frontend

- 회원 관리 UI
- 계획 관리 UI
- 동시 편집 & 화상 채팅 UI

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

- 회원관리 및 여행계획 관리에대한 REST API
- SpringSecurity 및 Redis를 이용한 캐싱
- EC2 서버 배포 위해 Dockerfile

```sh

```

<br />

---
