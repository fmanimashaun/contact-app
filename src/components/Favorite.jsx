import PropTypes from 'prop-types';
import { useFetcher } from 'react-router-dom';

const Favorite = ({ contact }) => {
      const fetcher = useFetcher();
  let { favorite } = contact;

    if (fetcher.formData) {
      favorite = fetcher.formData.get('favorite') === 'true';
    }
  
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}>
        {favorite ? '★' : '☆'}
      </button>
    </fetcher.Form>
  );
};

Favorite.propTypes = {
  contact: PropTypes.shape({
    favorite: PropTypes.bool,
  }).isRequired,
};

export default Favorite;
