Trong forder DemoSOA:
+Forder Midterm_Service: các api viết bằng java chạy bằng Eclipse
+Forder Ten: gồm font và code nodejs đổ dữ liệu lên view


Dùng Nodejs để đổ dữ liệu lên view:
Cách run:
npm i
npm start


IDE: Eclipse
Java: 
Server: Apache Tomcat 8.5

- Cài đặt server:
	+ Trong menu Window, chọn Preferences
	+ Chọn Server => Runtime Environments
	+ Chọn add và tiến hành add Apache Tomcat 8.5
- Import database
	+ Truy cập vào phpmyadmin, tiến hành import database bằng file "database.sql"
	+ Thiết lập lại dbName, portNumber, userID, password trong connection/DBConnection.java tương ứng với cấu hình của máy
- NOTE:
	+ SEVERE: Servlet [Jersey REST Service] in web application [PROJECT_NAME] threw load() exception java.lang.IllegalArgumentException
	=> Thay đổi Java Compiler version từ 17 thành 1.7 bằng cách nhấp chuột phải vào project → Properties → Java Compiler → Uncheck vào checkbox Use compliance from execution environment 'JavaSE-17' on the 'Java Build Path' → Chọn version 1.7 → Apply and Close