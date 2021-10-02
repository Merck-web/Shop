import React, {useState} from 'react';
import {Button, FormControl, Modal} from "react-bootstrap";
import {createBrand, createType} from "../../http/deviceAPI";

const CreateBrand = (show, onHide) => {
    const [value, setValue] = useState('')
    const addBrand = () =>{
        createBrand({name: value}).then(data => {
            setValue('')
            onHide()

        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый Бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormControl
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={"Введите название бренда"}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-dark" onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;