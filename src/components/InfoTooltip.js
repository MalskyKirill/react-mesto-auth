import union from '../images/Union.png'

function InfoTooltip ({isOpened, onClose}) {


  return (
    <div
      className={`popup ${isOpened ? 'popup_opened' : ''}`}
    >
      <div className='popup__container popup__container_img'>
        <img className="popup__sing-up-img" src={require('../images/Union.jpg')} alt='' />
        <h2 className='popup__title popup__title_img'>Вы успешно зарегистрировались!</h2>
        <button className='popup__close' type='button' onClick={onClose} />
      </div>
    </div>
  );
}

export default InfoTooltip;
