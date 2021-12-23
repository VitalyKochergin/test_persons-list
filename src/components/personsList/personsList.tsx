import React, {ReactElement, useEffect, useState} from 'react';
import { Popover } from "antd";

import {Person, PersonsProps} from "../../types/interfaces";
import styles from './personsList.module.scss'
import {fetchOnePerson} from "../../API/fetchData";

const PersonsList = ({ persons }: PersonsProps): ReactElement => {
  const [currentPerson, setCurrentPerson] = useState<Person | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!visible) setCurrentPerson(null);
  }, [visible])

  const getOnePerson = async (id: number): Promise<void> => {
    setCurrentPerson(null);
    const response = await fetchOnePerson(id);
    setCurrentPerson(response.data.data);
    setVisible(true);
  }

  const renderPersonContent = (person: Person | null) => {
    if (!person) return null
    return (
      <>
        <div className={styles.moreInfo}>
          <div className={styles.info}>
            <span>First name:</span>
            <p>{person.first_name}</p>
            <span>Last name:</span>
            <p>{person.last_name}</p>
            <span>Email:</span>
            <p>{person.email}</p>
          </div>
          <div className={styles.image}>
            <img src={person.avatar} alt='avatar'/>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className={styles.persons}>
      {persons.map((person) => {
        return (
          <Popover
            key={person.id}
            content={renderPersonContent(currentPerson)}
            title={currentPerson?.first_name}
            trigger="click"
            placement="right"
            visible={currentPerson?.id === person.id && visible}
            onVisibleChange={(visible) => setVisible(visible)}
          >
            <div
              className={currentPerson?.id === person.id ? [styles.person, styles.active].join(' ') : styles.person }
              onClick={() => getOnePerson(person.id)}
            >
              {person.first_name}
            </div>
          </Popover>
        )
      })}
    </div>
  );
};

export default PersonsList;