import React, { useState, useCallback, useEffect } from 'react';
import {
  Button,
  CardContent,
  Chip,
  Grid,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ProductI } from '../../../models/product';

interface Props {
  onSubmit: (fields: ProductI) => void
  onCancel: () => void
  product?: ProductI
}

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: '100%',
      marginTop: '16px'
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
  }),
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const themesList = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

// eslint-disable-next-line react/display-name
export default ({
  product,
  onSubmit,
  onCancel,
}: Props) => {
  const classes = useStyles();
  const {
    id: productId,
    title: productTitle,
    subTitle: productSubTitle,
    content: productContent,
    status: productStatus = 'draft',
    date: productDate,
    photo: productPhoto,
    productType: productProductType = 'class',
    pricePence: productPricePence,
  } = product || {}
  
  const id = productId || null;
  const [title, setTitle] = useState(productTitle);
  const [subTitle, setSubTitle] = useState(productSubTitle);
  const [content, setContent] = useState(productContent);
  const [status, setStatus] = useState(productStatus);
  const [date, setDate] = useState(productDate);
  const [photo, setPhoto] = useState(productPhoto);
  const [productType, setProductType] = useState(productProductType);
  const [pricePence, setPricePence] = useState(productPricePence);

  const handleTitle = useCallback(({ target: { value } }) => setTitle(value), [setTitle])
  const handleSubTitle = useCallback(({ target: { value } }) => setSubTitle(value), [setSubTitle])
  const handleContent = useCallback(({ target: { value } }) => setContent(value), [setContent])
  const handleStatus = useCallback(({ target: { value } }) => setStatus(value), [setStatus])
  const handleDate = useCallback((date) => setDate(date), [setDate])
  const handleProductType = useCallback(({ target: { value } }) => setProductType(value), [setProductType])
  const handlePricePence = useCallback(({ target: { value } }) => setPricePence(value), [setPricePence])
  const handlePhoto = useCallback(({ target: { value } }) => setPhoto(value), [setPhoto])

  const [themes, setThemes] = React.useState<string[]>([]);
  const handleTheme = useCallback(({ target: { value } }) => { console.log(value); setThemes(value) }, [])

  useEffect(() => {
    setTitle(productTitle);
    setSubTitle(productSubTitle);
    setContent(productContent);
    setStatus(productStatus);
    setDate(productDate);
    setPhoto(productPhoto);
    setProductType(productType);
    setPricePence(pricePence);
  }, [
    productTitle,
    productSubTitle,
    productContent,
    productStatus,
    productDate,
    productPhoto,
    pricePence,
    productType
  ])

  const handleSubmit = useCallback(() => onSubmit({ 
    id,
    title,
    subTitle,
    content,
    status,
    date,
    photo,
    pricePence,
    productType
  }), [
    id,
    title,
    subTitle,
    content,
    status,
    date,
    photo,
    pricePence,
    productType,
    onSubmit
  ])

  return (
    <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Price"
            margin="normal"
            name="price"
            placeholder="000"
            onChange={handlePricePence}
            type="number"
            value={pricePence}
            variant="outlined"
          />
          <FormHelperText>Price in pence, without a decimal. e.g. £4 -&gt; 400</FormHelperText>
        </Grid>
        <Grid item xs={3}>
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
        <Grid item xs={3}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status"
              value={status}
              onChange={handleStatus}
              label="Status"
            >
              <MenuItem value={'draft'}>Draft</MenuItem>
              <MenuItem value={'live'}>Live</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>Product Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={productType}
              onChange={handleProductType}
              label="Product Type"
            >
              <MenuItem value={'class'}>Class</MenuItem>
              <MenuItem value={'print'}>Print</MenuItem>
            </Select>
          </FormControl>
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

      <TextField
        fullWidth
        label="Content"
        margin="normal"
        name="content"
        multiline
        rows={6}
        onChange={handleContent}
        type="text"
        value={content}
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

      <FormControl className={classes.formControl}>
        <InputLabel id="themes-label">Themes</InputLabel>
        <Select
          labelId="themes-label"
          id="themes"
          multiple
          value={themes}
          onChange={handleTheme}
          input={<Input id="select-theme" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {(selected as string[]).map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {themesList.map((theme) => (
            <MenuItem key={theme} value={theme}>
              {theme}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

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

