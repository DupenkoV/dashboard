import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';

import { selectVisiblePositions } from '../store/positions/position-selectors'
import { addFilter } from 'store/filters/filters-actionCreators';

import { selectFilter } from 'store/filters/filters-selector';

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