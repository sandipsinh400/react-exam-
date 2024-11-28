import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addstudent } from "../redux/Studentslice";
import { useNavigate } from "react-router-dom";

const Studentform = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();
  const redirect = useNavigate();

  function submitdata(data) {
    console.log(data);
    dispatch(addstudent(data));
    redirect('/userlist');
  }

  return (
    <>
      <div className="container shadow mt-5 mb-5 p-5">
        <h2 className="text-center">Student Details Form</h2>
        <form onSubmit={handleSubmit(submitdata)}>
          <div className="mb-3">
            <label className="form-label">Username Name</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="form-control"
              id="username"
              placeholder="Enter Username"
            />
            {errors.username && <p className="text-danger">{errors.username.message}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Roll Number</label>
            <input
              type="number"
              {...register("rollNumber", { required: "Roll Number is required" })}
              className="form-control"
              id="rollNumber"
              placeholder="Enter Roll Number"
            />
            {errors.rollNumber && <p className="text-danger">{errors.rollNumber.message}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Class</label>
            <input
              type="number"
              {...register("class", { required: "Class is required" })}
              className="form-control"
              id="class"
              placeholder="Enter Class"
            />
            {errors.class && <p className="text-danger">{errors.class.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Studentform;
