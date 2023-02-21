# rn-boilerplate

Initial development and build setup completed

## 버전 정보

```
node v16.19.0
react v17.0.2
react-native v0.68.2
```

### 타입스크립트 패키지 설치 (cli 에러로 개별설치)

- `yarn add -d typescript @types/react --save`
- `yarn add -d typescript @types/react-native --save`
- [React Native에서 TypeScript 사용하기](https://dev-yakuza.posstree.com/ko/react-native/typescript/)
- [React Native 프로젝트 살펴보기](https://devbksheen.tistory.com/entry/React-Native-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0)

## 개발 커맨드

- `yarn start`
- `yarn ios`
- `yarn android`
- `yarn postinstall` : debugger open

# 디렉토리 구조

```bash
├── src/
│   ├── assets/                - 에셋 폴더 (이미지, 동영상.. 등)
│   ├── components/            - 로우레벨 컴포넌트 : 범용 컴포넌트 (Input, Title, Section ... 등)
│   ├── features/              - Redux Toolkit 기능단위 저장소
│   ├── helpers/               - 헬퍼 함수 (함수단위)
│   ├── hooks/                 - 커스텀 훅
│   ├── screens/               - 페이지 컴포넌트 (URL과 1:1)
│   ├── partials/              - 하이레벨 컴포넌트 : 특정 페이지 또는 부분에만 쓰이거나, 비즈니스 로직이 포함된 컴포넌트 (IntroBox, Header... 등)
│   ├── providers/             - 커스텀 Provider
```

## 라우팅

- [ReactNatigation 공식문서](https://reactnavigation.org/docs/getting-started)
- [React Native 내비게이션 및 Hooks 익히기](https://code-masterjung.tistory.com/126)

```bash
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
yarn add @react-navigation/native-stack
```

```bash
cd ios
pod install
```

```javascript
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={컴포넌트명} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

```javascript
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="페이지 이동"
        onPress={() => navigation.navigate(`Detail`)}
        // 또는
        // onPress={() => navigation.push(`Detail`)}
      >
    </View>
  )
}

export default HomeScreen;
```

## 확인된 빌드 에러

### watchman 권한 에러

https://github.com/facebook/watchman/issues/977

```
...
Operation not permitted. Make sure watchman is running for this project. See https://facebook.github.io/watchman/docs/troubleshooting.
...
```

```bash
watchman watch-del-all
watchman shutdown-server
```

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

1. `nvm install default `
2. `nvm ls`로 설치된 버전 목록들 중 v16 확인
3. `nvm use v16.x.x`
4. `nvm alias default v16.x.x`
   (nvm v16.x.x로 변경하여 디폴트 버전으로 설정)
5. `yarn ios`

[[React Native] PhaseScriptExecution error (in target 'FBReactNativeSpec' from project 'Pods')](https://velog.io/@jw4185/React-Native-PhaseScriptExecution-error-in-target-FBReactNativeSpec-from-project-Pods)

## Inspector

`yarn global add react-devtools` or `yarn add --dev react-devtools`

`react-devtools`

iOS 시뮬레이터 cmd + d > Show inspector

## Reactotron

1. Reactotron 다운로드 (https://github.com/infinitered/reactotron/releases)
2. 프로젝트에 reactotron 설치 `yarn add -D reactotron-react-native`
3. root 경로에 `reactotron.config.js` 생성

```javascript
import Reactotron from 'reactotron-react-native';

Reactotron.configure().useReactNative().connect();
```

4. index.tsx에 아래 코드 추가

```javascript
if (__DEV__) {
  import('./config').then(() => console.log('Reactotron Configured'));
}
```

참고한 글

- [RN Library 📚 리액트네이티브 디버거 도구](https://velog.io/@dody_/RN-Library-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EB%94%94%EB%B2%84%EA%B1%B0-%EB%8F%84%EA%B5%AC-react-native-debugger-redux-devtools-react-native-debugger-open)
- [리액트 네이티브(React-native)의 디버깅 도구 (React-devtools, Reactoron)](https://1nnovator.tistory.com/78)
