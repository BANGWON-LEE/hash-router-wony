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
  target.innerHTML = resultPage.page
}

//5번
export function choicePage() {
  const pageObj = pagesInfo.get()
  const path = location.hash.substring(1) || '/'

  const page = pageObj.find(el => {
    const result = el.path === path ? el.path === path : el.path === '*'
    return result
  })

  resultPage(page)
}

//2번
export function registerRoute(path, page) {
  //4번
  pagesInfo.set({ path: path, page: page })
}

//7번
window.addEventListener('hashchange', choicePage)
