package tn.essat.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import tn.essat.model.PFE;


@Repository
public interface IDaoPFE extends JpaRepository<PFE, Integer> {

	
	@Query("select m from PFE m where m.typepfe.id=?1")
	public List<PFE> getAllPfeByTypePfe(int id);
}
