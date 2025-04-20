import { useState } from "react";
import { 
  FormContainer, Form, Label, Input, Select, Textarea, SubmitButton, ImagePreview, ModalOverlay, ModalContent 
} from "./style";
import ButtonGradient from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { submitEWaste } from "../../services/trashService";

export default function AddNewTrashModal() {
  const [photo, setPhoto] = useState(null);
  const [form, setForm] = useState({
    brand: "",
    type: "",
    year: "",
    number: "",
    condition: "",
    notes: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitEWaste({
        ...form,
        photo
      });
  
      navigate("/dashboard");
      toast.success("E-waste registered successfully!");
    } catch (err) {
      console.error("❌ Error submitting e-waste:", err);
      toast.error("Failed to submit. Please try again.");
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <h2>Electronic Form</h2>
            <h3>Tell more about your e-trash and get information about how to proceed!</h3>

            <Label>Brand</Label>
            <Input name="brand" required value={form.brand} onChange={handleChange} />

            <Label>Type</Label>
            <Input name="type" required value={form.type} onChange={handleChange} />

            <Label>Year</Label>
            <Input name="year" type="number" required value={form.year} onChange={handleChange} />

            <Label>Serial / Number</Label>
            <Input name="number" required value={form.number} onChange={handleChange} />

            <Label>Condition</Label>
            <Select name="condition" required value={form.condition} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Bad">Bad</option>
            </Select>

            <Label>Notes</Label>
            <Textarea name="notes" required rows={3} value={form.notes} onChange={handleChange} />

            <Label>Upload a Photo</Label>
            <Input type="file" accept="image/*" required onChange={handleUpload} />

            {photo && (
              <ImagePreview src={URL.createObjectURL(photo)} alt="Preview" />
            )}

            <SubmitButton type="submit" onClick={handleSubmit}>
              Submit
            </SubmitButton>
            <ButtonGradient type="button" onClick={() => navigate("/dashboard")}>Back to Dashboard</ButtonGradient>
          </Form>
        </FormContainer>
      </ModalContent>
    </ModalOverlay>
  );
}
