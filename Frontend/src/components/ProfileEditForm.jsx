
function ProfileEditForm({
  profile,
  handleChange,
  handleSubmit,
  saving,
  setEditMode,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Bio"
        name="bio"
        value={profile.bio}
        onChange={handleChange}
      />

      <InputField
        label="GitHub"
        name="github"
        value={profile.github}
        onChange={handleChange}
      />

      <InputField
        label="LinkedIn"
        name="linkedin"
        value={profile.linkedin}
        onChange={handleChange}
      />

      <InputField
        label="College"
        name="college"
        value={profile.college}
        onChange={handleChange}
      />

      <InputField
        label="Graduation Year"
        name="graduation_year"
        type="number"
        value={profile.graduation_year}
        onChange={handleChange}
      />

      <InputField
        label="Current Year"
        name="current_year"
        value={profile.current_year}
        onChange={handleChange}
      />

      <InputField
        label="Branch"
        name="branch"
        value={profile.branch}
        onChange={handleChange}
      />

      <div style={{ marginBottom: "15px" }}>
        <label>Career Goal</label>

        <textarea
          name="career_goal"
          value={profile.career_goal}
          onChange={handleChange}
          rows="4"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            borderRadius: "10px",
          }}
        />
      </div>

      <button type="submit">
        {saving ? "Saving..." : "Save"}
      </button>

      <button
        type="button"
        onClick={() => setEditMode(false)}
        style={{ marginLeft: "10px" }}
      >
        Cancel
      </button>
    </form>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}</label>

      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "8px",
        }}
      />
    </div>
  );
}

export default ProfileEditForm;

