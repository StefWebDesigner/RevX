import React, {useState} from 'react';
import {Form, FormGroup, FormLabel, Modal, ModalFooter} from "react-bootstrap";
import axios from "axios";

const ReportForm = () => {

   const [report, setReport] = useState([{
       user: "",
       complaint: ""
   }]);

   const submitReport = async(e) => {
       e.preventDefault();

       if(!report.user.trim() || !report.complaint.trim()) {
           alert("Please enter all input fields");
           return;
       }

       const data = await axios.post('', report);
       console.log(data);
       setReport({
          user: "",
           compalaint : ""
       });
   };

   const reportChangeHandler = (e) => {
       setReport({
           ...report,
           [e.target.name] : e.target.value,
       });
   };

    return (
        <>
        <section>
            <Form onSubmit={submitReport}>
                <Modal.Header bsPrefix="formheading-dark">
                    <h3> Report User : </h3>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <FormLabel bsPrefix="form-dark">
                            Enter user who are reporting :
                        </FormLabel>
                        <Form.Control bsPrefix="form-dark" type="text" name="user" value={report.user} onChange={reportChangeHandler} placeholder="other username" aria-placeholder="other user" required/>
                    </FormGroup>
                    <FormGroup bsPrefix="form-dark">
                        <FormLabel bsPrefix="form-dark">
                            Please enter your complaint :
                        </FormLabel>
                        <Form.Control bsPrefix="form-dark" type="text" name="complaint" value={report.complaint} onChange={reportChangeHandler} placeholder="complaint" aria-placeholder="complaint" required/>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <button className="loginbtn" variant="none" type="submit">
                        Submit report
                    </button>
                </Modal.Footer>
            </Form>
        </section>


        </>
    );
};

export default ReportForm;
