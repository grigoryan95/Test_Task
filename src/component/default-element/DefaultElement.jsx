import PropTypes from 'prop-types';
import Typography from "@mui/material/Typography";

export const DefaultElement = ({attributes, children}) => {
    return (
            <Typography  variant="h5" color="primary" {...attributes} children={children}/>
    );
};

DefaultElement.propTypes = {
    attribute: PropTypes.object,
    children: PropTypes.array
}