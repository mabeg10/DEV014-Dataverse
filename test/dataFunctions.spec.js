import { filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData, sortAsc as fakeDataNew} from './data.js';

const data = fakeData
const sortAsc = fakeDataNew 


describe( 'filterData', () => {
  it('returns `filtrar data por intereses " Arte"`', () => {
    const actual= filterData(data, 'intereses', ' Arte');
    expect(actual.length).toBe(2); 
    expect(actual.map(item => item.name)).toContain('Emily Gilmore'); // también se puede usar .toEqual Ej: expect(filteredData.map(item => item.name)).toEqual(expect.arrayContaining(['Emily Gilmore', 'Liz Danes']));
    expect(actual.map(item => item.name)).toContain('Liz Danes');
  });

  it('Should return a message of Error in definition',()=>{
    const actual = filterData();
    expect(actual).toBe('Faltan definir parametros'); 
    expect(actual).not.toContain('Emily Gilmore');

  });
});

describe('sortData', () => {
  it('returns data sorted in ascending order', () => {
    const actual = sortData(fakeDataNew, 'name', 'asc');
    expect(actual).toEqual(sortAsc);
  });
});

  