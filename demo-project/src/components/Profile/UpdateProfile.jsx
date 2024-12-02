import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateProfile,
  clearErrors,
  loadUser,
} from "../../actions/userActions";
import { UPDATE_USER_RESET } from "../../constant/userConstant";
import { toast } from "react-toastify";
import "./EditProfile.css"; // Keep this for any necessary styles not covered by Input.css
import Banner from "./Banner";

const UpdateProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  const [coverPreview, setCoverPreview] = useState("");

  const { user } = useSelector((state) => state.user);
  const { isUpdated, error, loading } = useSelector(
    (state) => state.userUpdateProfile
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    username: "",
    bio: "",
    address: "",
  });

  const [avatar, setAvatar] = useState("");
  const [coverImage, setCoverImage] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        mobile: user.mobile || "",
        username: user.username || "",
        bio: user.bio || "",
        address: user.address || "",
      });
      setAvatarPreview(user.avatar?.url);
      setCoverPreview(user.coverImage?.url || "");
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Profile updated successfully!");
      dispatch(loadUser());
      navigate("/profile");
      dispatch({ type: UPDATE_USER_RESET });
    }
  }, [dispatch, error, navigate, isUpdated, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const updateProfileChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const updateCoverChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setCoverPreview(reader.result);
        setCoverImage(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const updateProfileSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    Object.keys(formData).forEach((key) => {
      myForm.append(key, formData[key]);
    });
    myForm.append("avatar", avatar);
    myForm.append("coverImage", coverImage);
    dispatch(updateProfile(myForm));
    toast.success("Profile updated successfully!");
    dispatch(loadUser());
    navigate("/profile");
  };

  return (
    <div className="contain">
      <Banner
        avatarPreview={avatarPreview}
        coverPreview={coverPreview}
        updateAvatarChange={updateProfileChange}
        updateCoverChange={updateCoverChange}
      />
      <div className="input">
        {/* <div className="cover-avatar position-relative">
          {coverPreview ? (
            <img src={coverPreview} width="100%" height="300" alt="Cover" />
          ) : (
            <h3 className="mt-2 text-center">Upload Your Cover Image</h3>
          )}
          <label
            htmlFor="cover-file-input"
            className="position-absolute float-end me-1"
            style={{ cursor: "pointer", zIndex: "1000" }}
          >
            <input
              type="file"
              id="cover-file-input"
              accept="image/*"
              className="d-none"
              onChange={updateCoverChange}
            />
            <span className="edit-icon">🖉</span>
          </label>
        </div> */}

        {/* <div className="avatar text-center position-relative">
          <img
            src={avatarPreview}
            alt="Avatar"
            className="img-fluid rounded-circle me-2"
            height="100"
            width="100"
          />
          <label htmlFor="avatar-file-input" className="edit-icon-label">
            <input
              type="file"
              id="avatar-file-input"
              accept="image/*"
              className="d-none"
              onChange={updateProfileChange}
            />
            <span className="edit-icon">🖉</span>
          </label>
        </div> */}

        <input
          type="text"
          name="firstName"
          placeholder="Enter Your First Name..."
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter Your Last Name..."
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          placeholder="UserName"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleInputChange}
        />
        <textarea
          name="bio"
          placeholder="Bio..."
          value={formData.bio}
          onChange={handleInputChange}
        ></textarea>
        <textarea
          name="address"
          placeholder="Address..."
          value={formData.address}
          onChange={handleInputChange}
        ></textarea>
        <div className="save-btn">
          <button onClick={updateProfileSubmit} disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;