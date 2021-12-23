import React, {ReactElement, useEffect, useState} from 'react';
import { Pagination } from 'antd';

import PersonsList from "../../components/personsList/personsList";
import {Person} from "../../types/interfaces";
import styles from './personContainer.module.scss';
import {fetchPersons} from "../../API/fetchData";

const PersonContainer = (): ReactElement => {
  const [personsList, setPersonsList] = useState<Person[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const getPersons = async (page: number = 1): Promise<void> => {
    const response = await fetchPersons(page);
    setTotalCount(response.data.total);
    setPersonsList(response.data.data);
  };

  useEffect(() => {
    getPersons();
  },[]);

  const handleChangePage = async (page: number): Promise<void> => {
    await getPersons(page);
  };

  return (
    <div className={styles.listPerson}>
      <h2 style={{color: '#40a9ff'}}>Person list</h2>
      {!!personsList.length && totalCount && (
        <>
          <PersonsList persons={personsList} />
          <Pagination defaultCurrent={1} total={totalCount} onChange={handleChangePage} />
        </>
      )}
    </div>
  );
};

export default PersonContainer;