const express = require('express');
const router = express.Router();
const multer = require('multer'); // để xử lý form-data
const fs = require('fs');
const path = require('path'); // Thêm dòng này


const controller = require('../controllers/todo.controller');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = './upload/images';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true }); // Tạo thư mục nếu chưa tồn tại
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        // const ext = path.extname(file.originalname);
        const ext = file.originalname;
        cb(null, `${ext}-${Date.now()}`);
    }
})

const upload = multer({
    storage: storage
});


// Tạo mới một mục Todo
router.post('/', upload.array('images'), controller.create);

router.get('/', (req, res) => {
    const id = req.query.id;
    if(id){
        return controller.getById(req, res);
    }else{
        return controller.getAll(req, res);
    }
});

// Cập nhật một mục Todo theo ID
router.put('/', upload.array('images'), controller.update);

// Xóa một mục Todo theo ID
router.delete('/', controller.delete);

module.exports = router;
