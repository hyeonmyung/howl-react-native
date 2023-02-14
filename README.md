# rn-boilerplate

Initial development and build setup completed

## 버전 정보

```
node v16.19.0
react 17.0.2
react-native v0.68.2
```

## 개발 커맨드

- `$ yarn start`
- `$ yarn ios`
- `$ yarn android`
- `$ yarn postinstall` : debugger open

## 확인된 빌드 에러

### iOS

```
N/A: version "default -> N/A" is not yet installed.

You need to run "nvm install default" to install it before using it.
Command PhaseScriptExecution failed with a nonzero exit code
...
...
...
PhaseScriptExecution error (in target 'FBReactNativeSpec' from project 'Pods')
```

1. `$ nvm install default `
2. `$ nvm ls`로 설치된 버전 목록들 중 v16 확인
3. `$ nvm use v16.x.x`
4. `$ nvm alias default v16.x.x`
   (nvm v16.x.x로 변경하여 디폴트 버전으로 설정)
5. `$ yarn ios`

[[React Native] PhaseScriptExecution error (in target 'FBReactNativeSpec' from project 'Pods')](https://velog.io/@jw4185/React-Native-PhaseScriptExecution-error-in-target-FBReactNativeSpec-from-project-Pods)

## Inspector

`$ yarn global add react-devtools` or `$ yarn add --dev react-devtools`

`$ react-devtools`

iOS 시뮬레이터 cmd + d > Show inspector

## Reactoron

1. Reactoron 다운로드 (https://github.com/infinitered/reactotron/releases)
2. 프로젝트에 reactoron 설치 `$ yarn add -D reactotron-react-native`
3. root 경로에 `reactoron.config.js` 생성

```javascript
import Reactotron from 'reactotron-react-native';

Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
```

4. index.js에 아래 코드 추가

```javascript
if (__DEV__) {
  import('./config').then(() => console.log('Reactotron Configured'));
}
```

참고한 글

- [RN Library 📚 리액트네이티브 디버거 도구](https://velog.io/@dody_/RN-Library-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EB%94%94%EB%B2%84%EA%B1%B0-%EB%8F%84%EA%B5%AC-react-native-debugger-redux-devtools-react-native-debugger-open)
- [리액트 네이티브(React-native)의 디버깅 도구 (React-devtools, Reactoron)](https://1nnovator.tistory.com/78)
