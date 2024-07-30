Create table Registration1
(
	ID INT IDENTITY(1,1)Primary key,
	UserName Varchar(100),
	Password Varchar(100),
	Email Varchar(100),
	Birth Varchar(100),
	IsActive INT,
)
SELECT * FROM Registration1;