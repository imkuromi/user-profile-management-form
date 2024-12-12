import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  FormLabel,
  Radio,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  RadioGroup,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema, schema } from "./schema";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
export default function Form() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      pdpa: false,
      gender: "",
      hobby: [],
      status: "",
      note: "",
    },
  });

  const [user, setUser] = useState<any[]>([]);

  const onSubmit = (data: any) => {
    const newData = [...user, data];
    setUser(newData);
  };

  const deleteUser = (index: number) => {
    const newTest = user.filter((_, i) => i !== index);
    setUser(newTest);
  };

  console.log(user);

  return (
    <Grid container spacing={2} sx={{ pt: 5 }}>
      <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5 }}>
        <Typography variant="h4" component="div" sx={{ textAlign: "center" }}>
          Profile management
        </Typography>
        <Paper sx={{ m: 2, p: 2 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                <TextField
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  fullWidth
                  id="name"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                <TextField
                  {...register("lastName")}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  fullWidth
                  id="lastName"
                  label="Last name"
                  variant="outlined"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                <TextField
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                <Controller
                  name="pdpa"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      label="confirm PDPA"
                      control={<Checkbox {...field} checked={field.value} />}
                    />
                  )}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                <Box>
                  <FormControl>
                    <Box>
                      <FormLabel>Gender</FormLabel>
                    </Box>
                    <Controller
                      name="gender"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup row {...field}>
                          <FormControlLabel
                            value="Male"
                            control={<Radio />}
                            label="Male"
                          />
                          <FormControlLabel
                            value="Female"
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="Ect"
                            control={<Radio />}
                            label="Ect"
                          />
                        </RadioGroup>
                      )}
                    />
                  </FormControl>
                </Box>

                <Box>
                  <Box>
                    <FormLabel>Hobby</FormLabel>
                  </Box>
                  <Controller
                    name="hobby"
                    control={control}
                    render={({ field }) => (
                      <>
                        <FormControlLabel
                          label="Game"
                          control={
                            <Checkbox
                              value="Game"
                              checked={field.value.includes("Game")}
                              onChange={(e) => {
                                const newValue = e.target.checked
                                  ? [...field.value, "Game"]
                                  : field.value.filter((v) => v !== "Game");
                                field.onChange(newValue);
                              }}
                            />
                          }
                        />
                        <FormControlLabel
                          label="Music"
                          control={
                            <Checkbox
                              value="Music"
                              checked={field.value.includes("Music")}
                              onChange={(e) => {
                                const newValue = e.target.checked
                                  ? [...field.value, "Music"]
                                  : field.value.filter((v) => v !== "Music");
                                field.onChange(newValue);
                              }}
                            />
                          }
                        />
                        <FormControlLabel
                          label="Craft"
                          control={
                            <Checkbox
                              value="Craft"
                              checked={field.value.includes("Craft")}
                              onChange={(e) => {
                                const newValue = e.target.checked
                                  ? [...field.value, "Craft"]
                                  : field.value.filter((v) => v !== "Craft");
                                field.onChange(newValue);
                              }}
                            />
                          }
                        />
                        <FormControlLabel
                          label="Reading"
                          control={
                            <Checkbox
                              value="Reading"
                              checked={field.value.includes("Reading")}
                              onChange={(e) => {
                                const newValue = e.target.checked
                                  ? [...field.value, "Reading"]
                                  : field.value.filter((v) => v !== "Reading");
                                field.onChange(newValue);
                              }}
                            />
                          }
                        />
                      </>
                    )}
                  />
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <InputLabel>Status</InputLabel>
                      <Select {...field} label="Status">
                        <MenuItem value={"Single"}>Single</MenuItem>
                        <MenuItem value={"Married"}>Married</MenuItem>
                        <MenuItem value={"Divorce"}>Divorce</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                <TextField
                  {...register("note")}
                  fullWidth
                  id="outlined-basic"
                  label="Note"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justifyContent="flex-end"
              alignItems="center"
              sx={{ mt: 2 }}
            >
              <Button variant="contained" onClick={() => reset()}>
                Reset
              </Button>

              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7 }}>
        {user.map((data, index) => (
          <Grid size={12} key={index + 1}>
            <Paper sx={{ m: 2, p: 2 }}>
              <Grid container columns={{ xs: 6, sm: 6, md: 6 }}>
                <Grid container size={{ xs: 3, sm: 3, md: 3 }}>
                  <Typography variant="h6" sx={{fontWeight: 'bold'}}>USER {index + 1}</Typography>
                </Grid>
                <Grid
                  container
                  justifyContent="flex-end"
                  size={{ xs: 3, sm: 3, md: 3 }}
                >
                  <DeleteOutlineIcon
                    sx={{
                      "&:hover": {
                        color: "red",
                      },
                    }}
                    onClick={() => deleteUser(index)}
                  />
                </Grid>
                <Grid container size={{ xs: 3, sm: 3, md: 3 }}>
                  <Typography>
                    Name: {data.name} {data.lastName}{" "}
                  </Typography>
                </Grid>
                <Grid container size={{ xs: 3, sm: 3, md: 3 }}>
                  <Typography>Email: {data.email} </Typography>
                </Grid>
                <Grid container size={{ xs: 3, sm: 3, md: 3 }}>
                  <Typography>Gender: {data.gender}</Typography>
                </Grid>
                <Grid container size={{ xs: 3, sm: 3, md: 3 }}>
                  <Typography>Hobby: {data.hobby.join(", ")}</Typography>
                </Grid>
                <Grid container size={{ xs: 3, sm: 3, md: 3 }}>
                  <Typography>Status: {data.status}</Typography>
                </Grid>
                <Grid container size={{ xs: 3, sm: 3, md: 3 }}>
                  <Typography>Note: {data.notes} </Typography>
                </Grid>
              </Grid>
              <Grid container columns={{ xs: 6, sm: 6, md: 6 }}>
                <FormControlLabel
                  label="Confirm PDPA"
                  control={<Checkbox checked={data.pdpa} />}
                />
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
