window.addEventListener("load", ()=>{
  const grid = new Isotope("section", { /* 배치할 요소를 감싼 부모 요소명*/
    itemSelector: "article", /* 배치할 요소명 */
    columnWidth: "article", /* 너빗값을 구할 요소명 */
    transitionDuration: "0.5s" /* 화면 재배치 시 요소가 움직이는 속도 */
  });

  // 클릭한 모든 버튼을 변수에 저장
  const btns = document.querySelectorAll("main ul li");

  for(let el of btns) {
    // 각 버튼에 클릭 이벤트 연결
    el.addEventListener("click", e=>{
      e.preventDefault();

      // 변수 sort에 클릭한 대상의 자식인 a 요소의 href 속성값 지정
      const sort = e.currentTarget.querySelector("a").getAttribute("href");

      grid.arrange({
        filter : sort
      });

      for(let el of btns) {
        el.classList.remove("on");
      }
      e.currentTarget.classList.add("on");

    })
  }
});

