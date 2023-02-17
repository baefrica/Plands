# 공통 프로젝트

## Team : 백구의 Blo9

## Project : Plans(Plan with Friends)

---

## System Architecture

<span align="center">

![SystemArchitecure](./images/System%20Architecrue.PNG)

</span>

<br />

---

## 역할

|  이름  |   역할   |             시스템              |
| :----: | :------: | :-----------------------------: |
| 김성한 | Frontend |  WebRTC, 동시편집, 시스템 구축  |
| 배성찬 | Frontend |  WebRTC, 컴포넌트 설계, 디자인  |
| 이상학 | Backend  | REST API, 동시편집, 백엔드 설정 |
| 김경민 | Backend  |     REST API, CI/CD, Docker     |
| 김소진 | Backend  |    WebRTC, 동시편집, Docker     |

<br />

---

## 진행 사항

### `WebRTC`

- OpenVidu를 사용한 리액트 컴포넌트 작업(클래스 컴포넌트)
- EC2상에 Openvidu를 적재하고 REST API 호출 통신 성공

<br />

---

### `Y.js 동시편집`

- 로컬에서 React 컴포넌트로 동시편집 및 개별 템플릿을 이용한 테스트 성공

<br />

---

### Frontend

- 회원 관리 UI
- 계획 관리 UI
- 동시 편집 & 화상 채팅 UI

<br />

---

### Backend

- 회원관리 및 여행계획 관리에대한 REST API
- SpringSecurity 및 Redis를 이용한 캐싱
- EC2 서버 배포 위해 Dockerfile

<br />

---

### EC2

- EC2에 두개의 진입점 NginX가 존재(로컬, Openvidu)
- Jenkins 리버스프록시 작업중
- Spring 서버 배포 및 Y.js(y-websocket) 서버 적재

---
