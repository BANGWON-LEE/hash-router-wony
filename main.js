//3번
function choicePageList() {
  const pageObj = []
  // console.log('RRRR', pageObj)
  return {
    get: function () {
      return pageObj
    },
    set: function (page) {
      if (page !== undefined) {
        pageObj.push(page)
        // return pageObj
      }
    },
  }
}

// 4번
const pageList = choicePageList()
// console.log('getAAA', getPage)

//6번
function resultPage(resultPage) {
  const target = document.querySelector('#root')
  target.innerHTML = resultPage.page
}

//5번
function choicePage() {
  const pageObj = pageList.get()
  const path = location.hash.substring(1) || '/'

  const page = pageObj.find(el => {
    return el.path === path
  })

  resultPage(page)
}

//2번
export function registerRoute(path, page) {
  // const pageList = choicePageList()
  // console.log('fefefe', path, page)
  //4번
  pageList.set({ path: path, page: page })
}

// console.log('pageList', pageList.getPageList())

window.addEventListener('hashchange', choicePage)
window.addEventListener('DOMContentLoaded', choicePage)
