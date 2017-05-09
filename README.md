# Demo0510

本專案使用 [Angular CLI](https://github.com/angular/angular-cli) v1.0.1 建立。

執行命令如下：

```
ng new demo0510 --skip-tests --skip-install
cd demo0510
npm install
```

## 開發伺服器

執行 `ng serve` 握 `npm start` 可以啟動開發伺服器，並在瀏覽器開啟 `http://localhost:4200/` 頁面即可。

## 程式碼骨架

執行 `ng generate component component-name` 可以產生新的元件。你也可以使用 `ng generate directive|pipe|service|class|module` 產生其他元件。

## 建置專案

執行 `ng build` 即可建置專案，輸出目錄會在 `dist/` 目錄下。使用 `-prod` 可以建置正式生產環境的版本(production build)。

## 執行單元測試

執行 `ng test` 可以透過 [Karma](https://karma-runner.github.io) 執行單元測試。

## 執行 end-to-end 測試

執行 `ng e2e` 可以透過 [Protractor](http://www.protractortest.org/) 執行 end-to-end 單元測試。執行之前，請確保已經正確執行 `ng serve` 或 `npm start` 命令。

## 更多協助

想知道更多 Angular CLI 用法，可以執行 `ng help` 或到 [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md) 查閱相關說明。
