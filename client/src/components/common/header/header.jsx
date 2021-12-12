import PropTypes from 'prop-types';
import { IconName, IconSize, ButtonType, AppRoute } from 'common/enums/enums';
import { DEFAULT_USER_AVATAR } from 'common/constants/constants';
import { userType } from 'common/prop-types/prop-types';
import {
  Button,
  Icon,
  Image,
  Grid,
  NavLink
} from 'components/common/common';

import styles from './styles.module.scss';

const Header = ({ user, onUserLogout }) => (
  <div className={styles.headerWrp}>
    <Grid centered container columns="2">
      <Grid.Column>
        {user && (
          <NavLink to={AppRoute.ROOT}>
            <div className={styles.userWrapper}>
              <Image
                circular
                width="45"
                height="45"
                src={user.image?.link ?? DEFAULT_USER_AVATAR}
              />
              {' '}
              {user.username}
            </div>
          </NavLink>
        )}
      </Grid.Column>
      <Grid.Column textAlign="right">
        <NavLink to={AppRoute.PROFILE} className={styles.menuBtn}>
          <Icon name={IconName.USER_CIRCLE} size={IconSize.LARGE} />
        </NavLink>
        <Button
          className={`${styles.menuBtn} ${styles.logoutBtn}`}
          onClick={onUserLogout}
          type={ButtonType.BUTTON}
          iconName={IconName.LOG_OUT}
          iconSize={IconSize.LARGE}
          isBasic
        />
      </Grid.Column>
    </Grid>
  </div>
);

Header.propTypes = {
  onUserLogout: PropTypes.func.isRequired,
  user: userType.isRequired
};

export default Header;
