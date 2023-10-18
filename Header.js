import PropTypes from 'prop-types';

function Header(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{props.title}</h1>
            <hr />
            <p className="my-4">
                {props.description}
            </p>
        </div>
    );
}
Header.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string.isRequired
};

Header.defaultProps = {
    title: "React unknown project",
    description: "Getting values from form"
};
export default Header;
