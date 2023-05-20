---
id: docker-command-cheat-sheet
title: Docker 명령어 치트 시트
authors: irostub
tags: [irostub,2023,docker,command,cheatsheet]
keywords: [docker,command,cheatsheet,도커,명령어,치트시트]
last_update:
    date: 5/20/2023
    author: irostub
---

# Docker 명령어 치트 시트

Docker 에서 자주 사용되는 명령어에 대해 알아봅시다. 이 글에선 이미지, 컨테이너에 대한 명령을 다룹니다.

---
## 이미지
컨테이너를 만들 이미지를 다루는 명령어입니다.

### 이미지 불러오기
다음 명령어를 사용해 registry 로 부터 이미지를 가져올 수 있습니다.
:::tip
어떤 레지스트리로부터 가져오는지에 따라 인증 방법이 상이할 수 있습니다.  
공개 registry 의 경우 인증 없이 불러올 수 있습니다.
:::
```bash
docker pull <image:tag>
```

### 이미지 등록
다음 명령어를 사용해 이미지를 registry 에 업로드 할 수 있습니다.
:::tip
불러온 이미지를 바로 등록 하거나 이미지를 직접 빌드하여 생성한 이미지를 등록할 수 있습니다.
:::
```bash
docker push <image:tag>
```

### 불러온 이미지 목록
다음 명령어를 사용해 불러온 이미지의 목록을 확인할 수 있습니다.
```bash
docker images
```

### 이미지 삭제
다음 명령어를 사용해 불러온 이미지를 제거할 수 있습니다.
:::tip
보편적으로 이미지 삭제는 이미지를 사용중인 컨테이너가 없을 때만 삭제할 수 있습니다.  
사용중인 컨테이너를 무시하고 강제로 삭제하기 위해선 `-f` 옵션을 줍니다.
:::
```bash
docker rmi <image_name:tag>
```

### 이미지 생성 (빌드)
다음 명령어를 사용해 Dockerfile 에 정의된 대로 이미지를 빌드할 수 있습니다.
:::tip
이미지 빌드시 `:tag` 부분을 작성하지 않은 경우 이미지의 tag 는 자동으로 latest 가 배정됩니다.
:::
```bash
docker build -t <image_name:tag> .
```

---
## 컨테이너

### 컨테이너 생성
다음 명령어를 사용해 불러온 이미지로부터 컨테이너를 생성할 수 있습니다.
`create` 명령의 더 많은 옵션은 [공식 문서](https://docs.docker.com/engine/reference/commandline/create/) 를 참고하세요.
```bash
docker create <image_name:tag>
```

### 컨테이너 실행
다음 명령어를 사용해 생성된 컨테이너를 실행할 수 있습니다.
```bash
docker start <container_name or container_id>
```

### 컨테이너 생성과 실행을 함께
다음 명령어를 사용해 컨테이너의 생성과 실행을 한번에 할 수 있습니다. 일반적으로 create, start 보다 더 자주 사용되는 명령입니다.
:::info
컨테이너에 볼륨을 마운트 하거나 외부 포트 노출을 지정하는 등 다양한 옵션을 가지고 있습니다. 
자세한 내용은 [공식 문서](https://docs.docker.com/engine/reference/commandline/run/) 를 참고하세요.

:::
```bash
docker run <image_name:tag>
```

### 컨테이너를 백그라운드에서 실행
[바로 위에서](#컨테이너-생성과-실행을-함께) 소개한 run 명령어를 실행하는 경우 쉘에서 분리되지 않고 연결을 유지하기에 쉘 접속이 끊어지면 컨테이너가 중지됩니다. 이런 상황은 `-d` 로 해결할 수 있습니다.
```bash
docker run -d <image_name:tag>
```

### 컨테이너 정지
다음 명령어를 사용해 실행 중인 컨테이너를 중지시킬 수 있습니다.
```bash
docker stop <container_name or container_id>
```

### 컨테이너 삭제
다음 명령어를 사용해 중지된 컨테이너를 제거할 수 있습니다.
```bash
docker rm <container_name or container_id>
```

### 실행 중인 컨테이너 내부 쉘 접근
다음 명령어를 사용해 컨테이너 내부 쉘에 접근할 수 있습니다.
```bash
docker exec -it <container_name or container_id> sh
```

### 컨테이너 로그 확인
다음 명령어를 사용해 컨테이너에서 발생한 로그를 확인할 수 있습니다.
```bash
docker logs -f <container_name or container_id>
```

### 컨테이너의 명세 확인
다음 명령어를 사용해 컨테이너의 명세를 상세히 확인할 수 있습니다.
```bash
docker inspect <container_name or container_id>
```

### 실행 중인 컨테이너 확인
다음 명령어를 사용해 실행 중인 컨테이너 목록을 확인할 수 있습니다.
```bash
docker ps
```

### 실행 & 정지 된 모든 컨테이너 확인
다음 명령어를 사용해 실행/중지 된 모든 컨테이너 목록을 확인할 수 있습니다.
```bash
docker ps --all
```

### 컨테이너가 사용 중인 리소스 상태 확인
다음 명령어를 사용해 컨테이너가 사용 중인 시스템의 자원 상황을 확인할 수 있습니다.
```bash
docker container stats
```