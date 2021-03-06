import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';
import './Goat.scss';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeAGoat: PropTypes.func.isRequired,
    useAGoat: PropTypes.func.isRequired,
  }

  freeGoatEvent = (e) => {
    const { goat, freeAGoat } = this.props;
    e.preventDefault();
    freeAGoat(goat.id);
  };

  useGoatEvent = (e) => {
    const { goat, useAGoat } = this.props;
    e.preventDefault();
    useAGoat(goat.id);
  };

  render() {
    const { goat } = this.props;

    return (
      <div className='Goat col-3'>
        <div className='card mb-3'>
          <img className='card-img-top' src={goat.imgUrl} alt='Goat Card' />
          <div className='card-body'>
            <h5 className='card-title'>{goat.name}</h5>
            <p className='card-text'>Beard Length: {goat.beardLength}</p>
          </div>
          <div className='card-footer'>
            {
              goat.isBusy ? (
                <button className='btn btn-dark' onClick={this.freeGoatEvent}>Free the Goat</button>
              ) : (
                <button className='btn btn-dark mr-1' onClick={this.useGoatEvent}>Use the Goat</button>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
