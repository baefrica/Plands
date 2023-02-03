# 공통 2주차

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

- OpenVidu를 사용한 리액트 컴포넌트 작업완료(클래스 컴포넌트)

  - 현재 EC2상에 Openvidu를 적재하고 REST API 호출 통신 성공
  - 각 세션에 대한 접근 마무리

- 향후 함수형 컴포넌트로 변환작업 마치면 마무리

<br />

---

### `Y.js 동시편집`

- 로컬에서 React 컴포넌트로 동시편집 및 개별 템플릿을 이용한 테스트 성공
- 향후 각 세션에 대한 템플릿 개별 편집 구현필요

<br />

---

### Frontend

- 현재 회원관리 및 여행 계획 컴포넌트 구조 및 폴더 구조 완성
- 각각의 컴포넌트 (기능 제외) 전체(100%대비) 40% 완성
- 추가작업을 통한 기능 구현 필요

<br />

---

### Backend

- 회원관리 및 여행계획 관리에대한 REST API 완성
- SpringSecurity 및 Redis를 이용한 캐싱 작업 진행중
- EC2 서버 배포 위해 Dockerfile 작업 진행중

<br />

---

### EC2

- 현재 EC2에는 두개의 진입점 NginX가 존재(로컬, Openvidu)
- Jenkins 리버스프록시 작업중(현재 고난..)
- 향후 Spring 서버 배포 및 Y.js(y-websocket) 서버 적재 예정

#### port 번호 :

- 80 : main 페이지
- 8080 : Jenkins
- 8994 : OpenVidu Server
- 9999 : Web Application Server(Spring Boot)

---
