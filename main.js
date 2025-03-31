import { another } from './pages/another.js'
import { home } from './pages/home.js'
import { notFound } from './pages/notFound.js'
import { sub } from './pages/sub.js'

function resultPage(resultPage) {
  const target = document.querySelector('#root')
  target.innerHTML = resultPage
}

function findPage(path) {
  const pageObj = viewPage(addPage())
  const page = pageObj.find(el => {
    return el.key === path
  })
  return page
}

function choicePage() {
  const path = location.hash.substring(1)
  const page = findPage(path)

  const choicedPage = page !== undefined ? page.view : notFound()

  // return choicedPage
  resultPage(choicedPage)
}

function addPage() {
  // 클로저를 사용하여 페이지가 추가될 때 배열에 저장될 수 있도록 진행
  const pageObj = []
  return function (page) {
    if (page !== undefined) {
      pageObj.push(page)
    }
    return pageObj
  }
}

function movePage(id) {
  const hashId = id === '/' ? '/' : '/' + id
  location.hash = hashId
}

function viewPage(pageObj) {
  // 라우트를 추가한다 생각하는 개념의 함수
  // const pageObj = addPage()

  pageObj({ key: '/', view: home() })
  pageObj({ key: '/sub', view: sub() })
  pageObj({ key: '/another', view: another() })

  return pageObj()
}

function loadInitialPage() {
  //초기 시작 함수.
  const result = findPage('/')
  resultPage(result.view)
}

window.addEventListener('DOMContentLoaded', loadInitialPage)
window.addEventListener('click', event => movePage(event.target.id))
window.addEventListener('hashchange', choicePage)
