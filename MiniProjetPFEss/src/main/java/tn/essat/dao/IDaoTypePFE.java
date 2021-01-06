package tn.essat.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.essat.model.TypePFE;



@Repository
public interface IDaoTypePFE extends JpaRepository<TypePFE, Integer> {

}
