import { useSelector, useDispatch } from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { deleteAllFilters, deleteFilter } from '../store/filters/filters-actionCreators';
import { selectFilter } from 'store/filters/filters-selector';

const FilterPanel = () => {
  const currentFilter = useSelector(selectFilter)
  const dispatch = useDispatch();
  if (currentFilter.length === 0) {
    return null
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilter.map(item => (
            <Badge 
            key={item}
            variant="clearable"
            onClear={() => dispatch(deleteFilter(item))}
            >
              {item}
            </Badge>
          ))}

        </Stack>

        <button className='link' onClick={() => dispatch(deleteAllFilters)}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};