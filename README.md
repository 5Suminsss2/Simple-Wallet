# Simple Wallet

> 알차고 간단한 기능이 탑재된 가계부 웹 어플리케이션

## 실행

```shell
yarn add

yarn start // local 서버로 실행

json-server --watch data.json --port 4000 // DB server 실행 
```

`localhost:3000` : 로컬 접속

## 사용

- React
- CSS3 & HTML
- javascript
- Recoil
- Styled-Component
- Figma (레이아웃)
- json-server (서버 라이브러리)

## 목차

- [기능](#기능)
- [구현](#구현)
- [트러블 슈팅](#트러블-슈팅)

---

## 기능

### 반응형

화면 사이즈에 따라 구성 변화

| Mobile 버전        |   Desktop 버전          |
| ----------------------- | -------------------------- |
| ![](./docs/webMain.PNG) | ![](./docs/webGuestBook.PNG) |


### 알림 기능

| 알람 설정 기능         | 목표 설정 기능          |
| --------------------- | ---------------------- |
| ![](./docs/login.PNG) | ![](./docs/logout.gif) |

| 일정 기간 전 알람 기능  | 일정 기간 후 알람 기능         | 목표 금액 이전 알람 기능  | 목표 금액 이후 알람 기능      |
| ---------------------- | ----------------------------- | ---------------------- | ----------------------------- |
| ![](./docs/signup.PNG) | ![](./docs/resetUserInfo.gif) |![](./docs/signup.PNG) | ![](./docs/resetUserInfo.gif)  |

### 총 입출금 금액 계산 기능

| 총 입출금 금액 계산             | 
| ----------------------------- |
| ![](./docs/createComment.gif) | 

### 입출금 분석 그래프 기능 

| 입출금 분석 그래프 기능             | 
| ----------------------------- |
| ![](./docs/createComment.gif) | 

### 경제 뉴스 추천 기능

| 경제 뉴스 추천 기능      |
| ---------------------- |
| ![](./docs/random.PNG) |

### 입출금 입력 기능

| 입출금 입력 기능     |
| ---------------------- |
| ![](./docs/random.PNG) |

---

## 구현

### 레이아웃 (Figma를 사용해 구현)

**모바일 버전 레이아웃**

![](./docs/defaultFlow.PNG)

**데스크탑 버전 레이아웃**

![](./docs/management.PNG)

### 파일별 역할

**src/components**

| 파일명 | 역할                                          |
| ----------------- | --------------------------------------------- |
| `AccountHistory`    | 입출금 내역 관리 폴더  |
| `Alarm`    | Main 페이지에 배치되는 알림 기능 관리 폴더 |
| `Modal`    | 알람 기능과 목표 알림 기능을 추가할 수 있는 모달 관련 폴더 |
| `News`    | NewApi를 활용하여 경제 뉴스 추천 기능 관리 폴더 |
| `CreateAccountHistory.js`    | 입출금 등록 기능 파일 |
| `GraphAccount.js`    | 등록된 입출금 내역을 Bar 그래프로 변환 기능 파일 |
| `Title.js`    | Main 화면의 Header 부분 관리 파일  |
| `Total.js`    | 등록된 입출금 내역을 총 잔액, 총 입금, 총 출금으로 나눈 관리 기능 |

**src/pages**

| 파일명 | 역할        |
| ------ | ----------- |
| `Main.js` | 메인 페이지 |

**src/store**

| 파일명     | 역할             |
| ---------- | ---------------- |
| `atom.js` | 쿠키 등록, 삭제, 반환하는 훅 |

**src/hooks**

| 파일명     | 역할             |
| ---------- | ---------------- |
| `usePromise.js` | api가 주는 비동기 데이터를 비동기적(Promise)으로 받아올 수 있게 도와주는 훅 |

**src/api**

| 파일명     | 역할             |
| ---------- | ---------------- |
| `getData.js` | 데이터를 받아오는 api 모음 파일 |

### 반응형
1. media query로 반응형 웹 및 모바일 개발
2. 모바일(기본), 웹(1200px 이상, 1600px 이상일 경우로 구분하여 개발)
``` css
  @media screen and (min-width: 1200px) {
    width: 17vw;
  }

  @media screen and (min-width: 1600px) {
    width: 250px;
  }
```

### 알림 기능
1. 상태관리로 `Recoil`을 사용해 데이터 관리
``` js
  const alarmDataset = useRecoilValue(alarmDatasetState); // useRecoilValue로 현재 기본값 가져오기
```
2. 알람 및 목표 기능 생성을 위한 modal 구현
``` js
  const [alarmOpen, setAlarmOpen] = useRecoilState(alarmModalState); // useRecoilState로 모달 기능 오픈 여부 확인
```
3. 알람 및 목표 기능 추가 시, 기존 데이터베이스 값이 변경되는 것을 인지한 Recoil이 화면 상 데이터를 Refresh 없이 바꿈
``` js
   const [dataset, setDataset] = useRecoilState(alarmDatasetState); // useRecoilState로 기존 데이터 가져오기
   setDataset([inputs, ...dataset]); // 데이터 수정
```

### 입출금 입력 기능 
1. 입출금 입력 시, Recoil을 통해 데이터 변화 관리
``` js
   const [dataset, setDataset] = useRecoilState(datasetState); // useRecoilState로 기존 데이터 가져오기
   setDataset([inputs, ...dataset]); // 데이터 수정
```   
2. axios로 입출금 데이터 Create, Read, Delete 기능 관리
``` js
  await axios.post(`${process.env.REACT_APP_API_URL}/accountHistoryData`, inputs) // EX) axios post로 등록
  ...
```

### 경제 뉴스 추천 기능 
1. NewsApi에서 제공하는 무료 뉴스 데이터 api를 사용하여 경제 뉴스 추천 기능 구현
2. promise를 사용하여 비동기적으로 데이터 처리
``` js
   // NewsContainer.js
   const [loading, response, error] = usePromise(() => {
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
    }, []);
    
    // usePromise.js
    export default function usePromise(promiseCreator, deps) {
      // 로딩중 / 완료 / 실패에 대한 상태 관리
      const [loading, setLoading] = useState(false);
      const [resolved, setResolved] = useState(null);
      const [error, setError] = useState(null);

      useEffect(() => {
        const process = async () => {
          setLoading(true);
          try {
            const resolved = await promiseCreator();
            setResolved(resolved);
          } catch (e) {
            setError(e);
          }
          setLoading(false);
        };
        process();
      }, deps);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      return [loading, resolved, error];
    }

```

### 입출금 분석 그래프 기능 
1. React 차트 라이브러리인 Nivo에서 Bar 그래프를 사용하여 입출금 분석 그래프 기능 구현

### 총 입출금 금액 계산 기능
1. Recoil을 활용하여 총 입출금 계산 기능 구현
``` js
  const [total, setTotal] = useRecoilState(totalState); // total 금액 가져오기
  let deposit = 0; 
  let withDraw = 0;

  // 입출금 내역 데이터 계산
  dataset.map(function (element) {
    if (element.accountType === "Deposit") {
      deposit += Number(element.price);
    } else {
      withDraw += Number(element.price);
    }
  });
  
  // 입출금 내역 금액 데이터 변경
  setTotal(deposit - withDraw);
```

## 트러블 슈팅

### 입출금 데이터 추가 시, 자동으로 차트에 반영이 되지 않는 이슈

**문제**
- 초기 데이터로 bar chart가 잘 그려지는데 나중에 데이터가 추가적으로 입력되면 자동으로 차트에 반영되지 않는 현상이 발생했다.

**해결**
1. 원인 분석
``` js
  // 기존 코드
  const dataset = useRecoilValue(datasetState);
  const filterDataset = dataset.filter(
      (value) => Number(value.year) === today.getFullYear()
  );
    
  // monthData에 값 더하기
  filterDataset.map((value) => {
    const month = Number(value.month)-1;
    if (value.accountType === "Deposit") {
        monthData[month].totalDeposit += Number(value.price);
    } else {
        monthData[month].totalWithdraw += Number(value.price);
    }
  }
);
```
- 기존 코드로 입력할 때, 리렌더링이 되지 않는 현상이라고 파악하였다.
- 그래서 useEffect와 useState를 사용해서 코드를 수정했지만 이슈를 해결하지 못하였다.

2. 해결방안
- 리액트에서 리렌더링 되는 조건에 대해서 다시 조사하였다.
1) 컴포넌트 자신의 state가 변하기
2) 부모 컴포넌트로부터 받는 props가 변하기
3) 부모 컴포넌트가 리렌더링 되기

이 중, 부모 컴포넌트로부터 받는 props가 변하기를 적용하여 코드를 수정했더니 이슈를 해결할 수 있었다.

- 자세한 정리 : https://ksumin-dev.tistory.com/133


### 데이터 삭제가 되지 않는 이슈

**문제**
- 구현 목표 : 댓글 삭제 버튼을 누르는 즉시, 새로고침하지 않고 댓글이 삭제되는 현상 나타나기
- 내가 생각한 방법 : - axios.delete로 삭제하고, useState를 사용해서 새로고침 하지 않아도 댓글이 삭제 될 수 있도록 구현했다.
- 문제 발생 : 하지만, 그 후 새로고침을 누르면 다시 댓글이 원상복구 되는 문제점을 파악했다.

**해결**
- axios delete는 해당 데이터의 id를 찾아 삭제하는 방식으로 운영된다.
- 하지만, 이번 프로젝트에서 사용한 json-server는 데이터가 입력되는 즉시, id를 반영하지 못하였다.
- 그렇기에, 임의의 id(기존 데이터 개수 + 1)를 데이터 생성할 때 넣어주었다.
``` js
   const [dataset, setDataset] = useRecoilState(datasetState); //기존 데이터
   const [inputs, setInputs] = useState({
    accountType: "deposit",
    year: "",
    month: "",
    date: "",
    accountContents: "",
    price: 0,
    id: datasetState.length + 1, // 기존 데이터 개수의 +1을 하여 id 구상
  });
```
- 이렇게 되면 문제점이, 총 3개의 데이터가 있고, id가 2인 데이터를 삭제한 후에 새 데이터를 등록하면 id가 3인 데이터로 생성되고 기존 id가 3이었던 데이터와 충돌하게 되어 등록이 되지 않는다.

- 그래서 id를 숫자가 아닌 무작위의 문자 (uuid)를 생성하여 데이터 생성 시 id로 넣어주어 이슈를 해결하였다.
``` js
   function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
   }
  
   const [inputs, setInputs] = useState({
    accountType: "deposit",
    year: "",
    month: "",
    date: "",
    accountContents: "",
    price: 0,
    id: uuid4(), // 기존 데이터 개수의 +1을 하여 id 구상
  });
```

---

## 학습한 내용

### recoil로 modal 개발하기
### json-server
### promise
### styled component 위치 
- CORS는 추가 HTTP 헤더를 사용하여 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에게 알려주는 체제


## 그 외 기록들
[토이프로젝트] input 입력 시 한글자만 입력되고 더이상 입력되지 않는 에러가 발생
[토이프로젝트] useState를 이용해 기존 배열에 값 추가하기
[토이프로젝트] jsx에서 else if문 사용하는 방법
[토이프로젝트] Styled-Component에서 구글 폰트 사용하기
[토이프로젝트] 리액트에서 onClick이 자동으로 동작하는 에러 해결
