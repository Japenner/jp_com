import { Button, FormGroup, TextField, Box, Chip, Divider, Checkbox, FormControlLabel, FormControl } from "@mui/material";
import { Note } from "../../../apis/NoteAPI";

interface Props {
  note: Note;
  onSubmit: () => void;
};

const EditNote = ({ note, onSubmit }: Props) => {
  const handleChipDelete = () => null;

  return (
    <FormGroup onSubmit={onSubmit}>
      <Box key={`${note.id}_edit`} display="flex" flexDirection="column">
        <TextField
          id={`${note.id}_title`}
          label="Title"
          variant="outlined"
          defaultValue={note.title}
          margin="normal"
        />
        <TextField
          id={`${note.id}_url`}
          label="URL"
          variant="outlined"
          defaultValue={note.url}
          margin="normal"
        />
        <TextField
          id={`${note.id}_description`}
          label="Description"
          variant="outlined"
          defaultValue={note.description}
          margin="normal"
          multiline
        />
        <Box display="flex" flexDirection="row">
          {note.tags.map((tag: string) => {
            return <Chip label={tag} variant="outlined" onDelete={handleChipDelete} />
          })}
        </Box>
        <FormControlLabel control={<Checkbox checked={note.private} />} label="Private" />
        <Button onClick={onSubmit}>Submit</Button>
      </Box>
      <Divider />
    </FormGroup>
  );
};

export default EditNote;
