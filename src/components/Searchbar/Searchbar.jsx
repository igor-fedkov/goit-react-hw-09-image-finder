import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

function Searchbar({onSearchQuerySubmit}) {
	const [searchText, setSearchText] = useState('');
	const [placeholder, setPlaceholder] = useState('Search images and photos');

	const onInputSearchQuery = (event) => {
		setSearchText(event.target.value);
	}

	const onSubmit = (event) => {
		event.preventDefault();

		if (searchText.trim() === '') {
			setSearchText('');
			return;
		}

		onSearchQuerySubmit(searchText);

		setPlaceholder(searchText);
		setSearchText('');
	}

	return (
		<header className={s.Searchbar}>
			<form className={s.SearchForm} onSubmit={onSubmit}>
				<button type="submit" className={s['SearchForm-button']}>
					<span className={s['SearchForm-button-label']}>Search</span>
				</button>

				<input
					className={s['SearchForm-input']}
					value={searchText}
					onChange={onInputSearchQuery}
					type="text"
					autoComplete="off"
					autoFocus
					placeholder={placeholder}
					
				/>
			</form>
		</header >
	);
}

Searchbar.propTypes = {
	onSearchQuerySubmit: PropTypes.func,
}

export default Searchbar;