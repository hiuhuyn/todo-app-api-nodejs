CREATE TABLE Todo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    url TEXT,
    completed BOOLEAN DEFAULT 0
);
