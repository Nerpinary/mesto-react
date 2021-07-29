import '../index.css';
import {useState, useEffect} from 'react';
import { api } from '../utils/api';
import Card from './Card';


export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [userName, setUserName] = useState('');
    const [userJob, setUserJob] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    useEffect(() => {
        api.getInfo()
            .then(res => {
                setUserName(res.name)
                setUserJob(res.about)
                setUserAvatar(res.avatar)
            })
            .catch(res => {
                console.log(`Ошибка: ${res.status}`);
            })
    }, []);

    const [cards, setCards] = useState([]);
    useEffect(() => {
            api.getInitialCards()
                .then(res => {
                    setCards(res)
                })
                .catch(res => {
                    console.log(`Ошибка: ${res.status}`);
                })
        }, []);

    return (
        <main className="content">
        
            <section className="profile">
            <div className="profile__description">
                <div className="profile__avatar-box">
                <button onClick={onEditAvatar} className="profile__avatar-edit-button"><img src={userAvatar} class="profile__avatar" alt="Аватар" /></button>
                </div>
                <div className="profile__info">
                <div className="profile__name-button">
                    <h1 className="profile__name">{userName}</h1>
                    <button onClick={onEditProfile} className="profile__edit-button" type="button"></button>
                </div>
                <p className="profile__job">{userJob}</p>
                </div>
            </div>
            <button onClick={onAddPlace} className="profile__add-button" type="button"></button>
            </section>

            <section className="places">
            <ul className="places__list">
            {cards.map((item) => (
                <Card key={item._id} card={item} onClick={onCardClick} />
            ))}
            </ul>
            </section>  

        </main>
    )
}
