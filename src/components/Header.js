import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('clickity clackity')
    }

    return (
        <header className='header'>
            <h1> {title}</h1>
            <Button color='blue' text='generic button text' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: '*hits blunt* bruuuh, you faded? errwut?',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
