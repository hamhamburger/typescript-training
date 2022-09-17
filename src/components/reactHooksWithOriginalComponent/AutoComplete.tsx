import { useForm,Controller  } from "react-hook-form";
import {
  Autocomplete,
  Button,
  TextField,
  Container,
  Stack
} from "@mui/material";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const ControlledAutocomplete = ({ options = [], renderInput, getOptionLabel, onChange: ignored, control, defaultValue, name, renderOption }) => {
  return (
    <Controller
      render={({ onChange, ...props }) => (
        <Autocomplete
          options={options}
          getOptionLabel={getOptionLabel}
          renderOption={renderOption}
          renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Field Label"
                    margin="normal"
                    error={errors[fieldName]}
                  />
                )}
          onChange={(e, data) => onChange(data)}
          {...props}
        />
      )}
      onChange={([, data]) => data}
      defaultValue={defaultValue}
      name={name}
      control={control}
    />
  );
}

export default ControlledAutocomplete