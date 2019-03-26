import React, { useState } from 'react';
import clsx from 'clsx';
import AsyncSelect from 'react-select/lib/Async';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const someAPI = searchText =>
  new Promise(resolve => {
    setTimeout(() => {
      const teams = [
        { label: 'Boston Bruins', value: 'BOS' },
        { label: 'Buffalo Sabres', value: 'BUF' },
        { label: 'Detroit Red Wings', value: 'DET' },
        { label: 'Florida Panthers', value: 'FLA' },
        { label: 'Montreal Canadiens', value: 'MTL' },
        { label: 'Ottawa Senators', value: 'OTT' },
        { label: 'Tampa Bay Lightning', value: 'TBL' },
        { label: 'Toronto Maple Leafs', value: 'TOR' },
        { label: 'Carolina Hurricanes', value: 'CAR' },
        { label: 'Columbus Blue Jackets', value: 'CBJ' },
        { label: 'New Jersey Devils', value: 'NJD' },
        { label: 'New York Islanders', value: 'NYI' },
        { label: 'New York Rangers', value: 'NYR' },
        { label: 'Philadelphia Flyers', value: 'PHI' },
        { label: 'Pittsburgh Penguins', value: 'PIT' },
        { label: 'Washington Capitals', value: 'WSH' },
        { label: 'Chicago Blackhawks', value: 'CHI' },
        { label: 'Colorado Avalanche', value: 'COL' },
        { label: 'Dallas Stars', value: 'DAL' },
        { label: 'Minnesota Wild', value: 'MIN' },
        { label: 'Nashville Predators', value: 'NSH' },
        { label: 'St. Louis Blues', value: 'STL' },
        { label: 'Winnipeg Jets', value: 'WPG' },
        { label: 'Anaheim Ducks', value: 'ANA' },
        { label: 'Arizona Coyotes', value: 'ARI' },
        { label: 'Calgary Flames', value: 'CGY' },
        { label: 'Edmonton Oilers', value: 'EDM' },
        { label: 'Los Angeles Kings', value: 'LAK' },
        { label: 'San Jose Sharks', value: 'SJS' },
        { label: 'Vancouver Canucks', value: 'VAN' },
        { label: 'Vegas Golden Knights', value: 'VGK' }
      ];

      resolve(
        teams.filter(
          team => searchText && match(team.label, searchText).length
        )
      );
    }, 1000);
  });

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  input: {
    display: 'flex',
    padding: 0
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  },
  noOptionsMessage: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  chip: {
    margin: `${theme.spacing(1) / 2}px ${theme.spacing(1) / 4}px`
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    )
  }
}));

const ValueLabel = ({ label, search }) => {
  const matches = match(label, search);
  const parts = parse(label, matches);

  return parts.map((part, index) =>
    part.highlight ? (
      <span key={index} style={{ fontWeight: 500 }}>
        {part.text}
      </span>
    ) : (
      <span key={index}>{part.text}</span>
    )
  );
};

const NoOptionsMessage = props => (
  <Typography
    color="textSecondary"
    className={props.selectProps.classes.noOptionsMessage}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

const inputComponent = ({ inputRef, ...props }) => (
  <div ref={inputRef} {...props} />
);

const Control = props => (
  <TextField
    fullWidth
    InputProps={{
      inputComponent,
      inputProps: {
        className: props.selectProps.classes.input,
        inputRef: props.innerRef,
        children: props.children,
        ...props.innerProps
      }
    }}
    {...props.selectProps.textFieldProps}
  />
);

const Option = props => (
  <MenuItem
    buttonRef={props.innerRef}
    selected={props.isFocused}
    component="div"
    style={{
      fontWeight: props.isSelected ? 500 : 400
    }}
    {...props.innerProps}
  >
    <ValueLabel
      label={props.children}
      search={props.selectProps.inputValue}
    />
  </MenuItem>
);

const Placeholder = props => (
  <Typography
    color="textSecondary"
    className={props.selectProps.classes.placeholder}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

const SingleValue = props => (
  <Typography
    className={props.selectProps.classes.singleValue}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

const ValueContainer = props => (
  <div className={props.selectProps.classes.valueContainer}>
    {props.children}
  </div>
);

const Menu = props => (
  <Paper
    square
    className={props.selectProps.classes.paper}
    {...props.innerProps}
  >
    {props.children}
  </Paper>
);

const IndicatorSeparator = () => null;

const ClearIndicator = props => (
  <IconButton {...props.innerProps}>
    <CancelIcon />
  </IconButton>
);

const DropdownIndicator = props => (
  <IconButton {...props.innerProps}>
    <ArrowDropDownIcon />
  </IconButton>
);

const MultiValue = props => (
  <Chip
    tabIndex={-1}
    label={props.children}
    className={clsx(props.selectProps.classes.chip, {
      [props.selectProps.classes.chipFocused]: props.isFocused
    })}
    onDelete={props.removeProps.onClick}
    deleteIcon={<CancelIcon {...props.removeProps} />}
  />
);

const LoadingIndicator = () => <CircularProgress size={20} />;

const LoadingMessage = props => (
  <Typography
    color="textSecondary"
    className={props.selectProps.classes.noOptionsMessage}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

export default function Autocomplete(props) {
  const classes = useStyles();
  const [value, setValue] = useState(null);

  return (
    <div className={classes.root}>
      <AsyncSelect
        value={value}
        onChange={value => setValue(value)}
        textFieldProps={{
          label: 'Team',
          InputLabelProps: {
            shrink: true
          }
        }}
        {...{ ...props, classes }}
      />
    </div>
  );
}

Autocomplete.defaultProps = {
  cacheOptions: true,
  defaultOptions: true,
  loadOptions: someAPI,
  isMulti: true,
  isClearable: true,
  components: {
    Control,
    Menu,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    MultiValue,
    ValueContainer,
    IndicatorSeparator,
    ClearIndicator,
    DropdownIndicator,
    LoadingIndicator,
    LoadingMessage
  }
};
