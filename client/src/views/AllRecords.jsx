import { Link, useOutletContext } from 'react-router-dom';
import axios from 'axios';

import DeleteButton from '../components/DeleteButton'

const AllRecords = () => {
  const { baseUrl, records } = useOutletContext();

  const deleteRecord = (id) => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <table className="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th>Album Title</th>
          <th>Artist</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {records &&
          records.map((record) => {
            return (
              <tr key={record._id}>
                <td className="align-middle">
                  <Link to={`/records/${record._id}`}>{record.title}</Link>
                </td>
                <td className="align-middle">{record.artist}</td>
                <td>
                  <Link
                    to={`/records/${record._id}/edit`}
                    className="btn btn-warning me-2"
                  >
                    Edit
                  </Link>
                  <DeleteButton recordId={record._id} successCallback={deleteRecord} 
                  >
                    Delete
                  </DeleteButton>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default AllRecords;