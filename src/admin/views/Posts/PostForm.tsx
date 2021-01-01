import React, { useState, useCallback } from 'react';
import {
  Button,
  CardContent,
  Grid,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { PostI } from '../../../models/post';
import SlateEditor from '../../components/SlateEditor'

interface Props {
  onSubmit: (fields: any) => void
  onCancel: () => void
  post?: PostI
}

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: '100%',
      marginTop: '16px',
    },
    switch: {
      textAlign: 'center',
      marginTop: '16px',
    }
  }),
);

// eslint-disable-next-line react/display-name
export default ({
  post,
  onSubmit,
  onCancel,
}: Props) => {
  const classes = useStyles();
  const {
    id: postId,
    title: postTitle,
    subTitle: postSubTitle,
    content: postContent,
    excerpt: postExcerpt,
    status: postStatus = 'draft',
    sticky: postSticky,
    date: postDate,
    photo: postPhoto,
  } = post || {}
  
  const id = postId || null;
  const [title, setTitle] = useState(postTitle);
  const [subTitle, setSubTitle] = useState(postSubTitle || '');
  const [content, setContent] = useState(postContent);
  const [excerpt, setExcerpt] = useState(postExcerpt || '');
  const [status, setStatus] = useState(postStatus);
  const [sticky, setSticky] = useState(postSticky);
  const [date, setDate] = useState(postDate);
  const [photo, setPhoto] = useState(postPhoto);

  const handleTitle = useCallback(({ target: { value } }) => setTitle(value), [setTitle])
  const handleSubTitle = useCallback(({ target: { value } }) => setSubTitle(value), [setSubTitle])
  const handleContent = useCallback((value) => setContent(value), [setContent])
  const handleExcerpt = useCallback(({ target: { value } }) => setExcerpt(value), [setExcerpt])
  const handleStatus = useCallback(({ target: { value } }) => setStatus(value), [setStatus])
  const handleSticky = useCallback(({ target: { checked } }) => setSticky(checked), [setSticky])
  const handleDate = useCallback((date) => setDate(date), [setDate])
  const handlePhoto = useCallback(({ target: { value } }) => setPhoto(value), [setPhoto])

  // useEffect(() => {
  //   setTitle(postTitle);
  //   setSubTitle(postSubTitle);
  //   setContent(postContent);
  //   setExcerpt(postExcerpt || '');
  //   setStatus(postStatus);
  //   setSticky(postSticky);
  //   setDate(postDate);
  //   setPhoto(postPhoto);
  // }, [
  //   postTitle,
  //   postSubTitle,
  //   postContent,
  //   postStatus,
  //   postExcerpt,
  //   postSticky,
  //   postDate,
  //   postPhoto
  // ])

  const handleSubmit = useCallback(() => onSubmit({ 
    id,
    title,
    subTitle,
    content,
    excerpt,
    status,
    sticky,
    date,
    photo
  }), [
    id,
    title,
    subTitle,
    content,
    excerpt,
    status,
    sticky,
    date,
    photo,
    onSubmit
  ])

  return (
    <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              onChange={handleStatus}
              label="Status"
            >
              <MenuItem value={'draft'}>Draft</MenuItem>
              <MenuItem value={'live'}>Live</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormGroup>
            <div className={classes.switch}>
              <FormControlLabel
                control={
                  <Switch
                    checked={sticky}
                    onChange={handleSticky}
                    name="sticky"
                    color="primary"
                  />
                }
                label="Sticky"
              />
            </div>
          </FormGroup>
        </Grid>
        <Grid item xs={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date"
              value={date}
              onChange={handleDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>

      <TextField
        fullWidth
        label="Title"
        margin="normal"
        name="title"
        onChange={handleTitle}
        type="text"
        value={title}
        variant="outlined"
      />
      <TextField
        fullWidth
        label="SubTitle"
        margin="normal"
        name="subTitle"
        onChange={handleSubTitle}
        type="text"
        value={subTitle}
        variant="outlined"
      />
      <SlateEditor
        initialValue={content}
        onChange={handleContent}
      />
      <TextField
        fullWidth
        label="Excerpt"
        margin="normal"
        name="excerpt"
        multiline
        rows={3}
        onChange={handleExcerpt}
        type="text"
        value={excerpt}
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Photo"
        margin="normal"
        name="photo"
        onChange={handlePhoto}
        type="text"
        value={photo}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSubmit}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={onCancel}
      >
        Cancel
      </Button>
    </CardContent>
  );
}

