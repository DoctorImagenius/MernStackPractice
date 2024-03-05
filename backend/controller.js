import { Users } from "./model.js";

export function create(req, res) {
    let postData = req.body;
    let data = new Users({
        name: postData.name,
        age: postData.age,
    });
    data.save()
        .then(() => {
            res.status(201).send("your data have been saved...");
        })
        .catch(() => {
            res.status(201).send("your data is not saved...");
        });
}

export function read(req, res) {
    Users.find()
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(201).send("you can not read data...");
        });
}

export function readById(req, res) {
    let searchName = req.params.name;
    Users.find({ name: searchName })
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(201).send("you can not read data...");
        });
}

export function update(req, res) {
    let updatableName = req.params.name;
    let UpdateData = req.body;
    Users.updateOne(
        { name: updatableName },
        {
            $set: {
                name: UpdateData.name,
                age: UpdateData.age,
            },
        }
    )
        .then(() => {
            res.status(201).send("Data updated...");
        })
        .catch(() => {
            res.status(201).send("you can not update this data...");
        });
}

export function del(req, res) {
    let deleteId = req.params.id;
    Users.deleteOne({ _id: deleteId })
        .then(() => {
            res.status(201).send("Data deleted...");
        })
        .catch(() => {
            res.status(201).send("Data is not deleted...");
        });
}
