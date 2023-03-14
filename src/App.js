import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FilterPanel } from 'features/filter/FilterPanel';
import { JobList } from 'features/positions/JobList';
import { TheHeader } from 'components/TheHeader';

import { addPosition } from 'features/positions/position-slice'; 
import data from './mock/data.json'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPosition(data));
  })

  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
