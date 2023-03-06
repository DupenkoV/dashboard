import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { useDispatch } from 'react-redux';
import { deleteAllFilters } from '../store/filters/filters-actionCreators';


const FilterPanel = () => {
  const dispatch = useDispatch();
  
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          <Badge variant="clearable">Frontend</Badge>
          <Badge variant="clearable">Backend</Badge>
          <Badge variant="clearable">React</Badge>
        </Stack>

        <button className='link' onClick={() => dispatch(deleteAllFilters)}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};