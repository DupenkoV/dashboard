import { useSelector, useDispatch } from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { removeFilter, clearFilter } from './filter-slice.js'; 
import { selectFilter } from './filter-slice.js';

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
            onClear={() => dispatch(removeFilter(item))}
            >
              {item}
            </Badge>
          ))}

        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter())}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};