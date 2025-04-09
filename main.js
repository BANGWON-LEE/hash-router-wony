//3번
function pageList() {
  const pageArr = []
  return {
    get: function () {
      return pageArr
    },
    set: function (page) {
      pageArr.push(page)
    },
  }
}

const pagesInfo = pageList()

//6번
function resultPage(resultPage) {
  const target = document.querySelector('#root')
  if (resultPage === undefined)
    return (target.innerHTML = registerNotFoundRouter())
  target.innerHTML = resultPage.page
}

//5번
export function choicePage() {
  /**
   * 등록
   * 1. user/:id
   * 2. user/:id => "user" / ":id"
   *
   * 방문
   * 1. user/123
   * 2. "user",  ":id" => ?? =>  user, 123 => matched
   * 3 * 2. "user", ":id" => ?? =>  user, 123, 456 => unmatched
   *
   * 경로 매치
   * user/123
   * 1. current, route => 분리한 세그먼트의 길이가 동일한지 체크
   * 2. if !route[0].include(":") route[0] === current[0] mached true
   * 3. else matched false[]
   */
  const pageObj = pagesInfo.get()
  const path = location.hash || '#/'

  const page = pageObj.find(el => {
    const pathParamsVaild = pathParams(el, path)

    // const result = el.path === path ? el.path === path : el.path === '*'
    return pathParamsVaild
  })

  console.log('gggppp', page)

  resultPage(page)
}

function pathParams(el, path) {
  const visitPath = path.split('/')
  const routerPath = el.path.split('/')
  // console.log('checkPath', visitPath, '<===>', routerPath, el.path)
  // console.log('router!!', !routerPath.includes(':'))
  const pathParamsChecking = routerPath.filter((el, index) => {
    // console.log('elel', el)
    return el.includes(':')
  })
  if (visitPath.length !== routerPath.length) return
  // console.log('nowCheck', pathParamsChecking)
  if (pathParamsChecking.length > 0) {
    // el.page('fefefefe')
    // console.log('f1', el)
    //  resultPage(page('fefefefe'))
    return el
    // return
  } else {
    // console.log('f2', el)
    return el.path === path ? el.path === path : el.path === '*'
  }
}

//2번
export function registerHashRouter(path, page) {
  //4번
  pagesInfo.set({ path: path, page: page })
}

function registerNotFound() {
  let page
  return function (notFound) {
    if (page === undefined) {
      page = notFound
      return
    } else {
      return page
    }
  }
}

export const registerNotFoundRouter = registerNotFound()

//7번
window.addEventListener('hashchange', choicePage)
// 모듈로 만들 때, 위처럼 windw 이벤트리스너를 사용하면 협업할 때 어려움.

// 패스 파라미터 고민
// 1. 패스 파라미터가 있는 url 라우트를 등록하기
// 2.

// < 개선해야 할 점. (to do list) >

// 1. registerHashRouter부분 경로에 해쉬 넣기 ==> ok
// 2. 코드 응집도 높이고 ( 사방으로 registerHashRouter가 쓰이지 않도록 )
// 3. 중복 path 방지
// 4. path parameter 구현하기!
// 5. notFound 경로로 없이 해도 됨 ====> ok
// 6. 이후에 history router 구현.

//TIP
//설명하는 방법( 대명사 사용하지 않기)

// 응집도 높이기 방법
