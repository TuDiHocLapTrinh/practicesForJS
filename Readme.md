# Note

- Tên folder, project đặt dạng abc-bca thôi cũng được, vì mặc định kiểu folder của window nó đặt là như thế ấy
- File .gitignore là file mình sẽ ignore những folder hoặc file không cần push lên git, ví dụ như thư mục node_modules là thư mục chứa file thư viện tải về nên không cần quan tâm làm gì
- File package.json là phần sẽ định nghĩa 1 số cái cơ bản của project nodejs(script chạy, các thư viện phụ thuộc https://viblo.asia/p/tong-quan-ve-npm-4P856dy3ZY3)
- Nên đặt tên rõ nghĩa, string ít nhất viết str(không viết s), khồng đặt tên function kiểu run(run what the fuck? too generic)
- Tên biến nên để dạng camelCase, snake_case thường đặt cho biến của php hoặc column của database

## Cách để chạy project

```
cd practiceForJs
node -v
npm --version
npm install
npm test
```

## Phần test

- Tên file nhớ đặt dạng [file-name].spec.js
- Phần export các function để test nhớ dùng module.export (https://viblo.asia/p/nodejs-require-exports-and-moduleexports-djeZ18PQKWz)
- Có thể thêm các thư viện thoải mái bằng `npm install [package_name]` các package tìm ở https://www.npmjs.com/
- Phần test những function nhỏ như thế gọi là viết UT(unit test), test result check bằng kết quả trên console hoặc cài extentions jest
