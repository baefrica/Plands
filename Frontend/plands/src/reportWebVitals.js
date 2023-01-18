const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// 관련 참고 사이트 :
// https://velog.io/@sunhwa508/reportWebVitals%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%8B%A0%EB%B6%84

export default reportWebVitals;
