import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';

import { selectVisiblePositions } from './position-slice'; 
import { addFilter } from 'features/filter/filter-slice.js'; 

import { selectFilter } from 'features/filter/filter-slice.js';

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilter)
  const positions = useSelector((state) => 
    selectVisiblePositions(state, currentFilters)
  )

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition 
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item} />
      ))}
    </div>
  )
}

export {JobList};